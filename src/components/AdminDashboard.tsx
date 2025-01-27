import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { Button } from './ui/button';
import { supabase } from '../lib/supabase';
import * as XLSX from 'xlsx';

interface RSVP {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  attending: boolean;
  dietary_restrictions: string;
  plus_one: boolean;
  created_at: string;
}

export function AdminDashboard() {
  const [rsvps, setRsvps] = useState<RSVP[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRSVPs();
  }, []);

  async function fetchRSVPs() {
    try {
      const { data, error } = await supabase
        .from('rsvps')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setRsvps(data || []);
    } catch (error) {
      console.error('Error fetching RSVPs:', error);
      alert('Error loading RSVPs');
    } finally {
      setLoading(false);
    }
  }

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(rsvps);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'RSVPs');
    XLSX.writeFile(workbook, 'wedding-rsvps.xlsx');
  };

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-navy-900">Guest RSVPs</h2>
        <Button onClick={exportToExcel}>
          <Download className="w-4 h-4 mr-2" />
          Export to Excel
        </Button>
      </div>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Attending
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Plus One
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dietary Restrictions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {rsvps.map((rsvp) => (
                <tr key={rsvp.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {rsvp.first_name} {rsvp.last_name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{rsvp.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      rsvp.attending ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {rsvp.attending ? 'Yes' : 'No'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {rsvp.plus_one ? 'Yes' : 'No'}
                  </td>
                  <td className="px-6 py-4">
                    {rsvp.dietary_restrictions || '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}