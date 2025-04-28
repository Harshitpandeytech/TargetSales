import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Upload } from 'lucide-react';
import ServicesGrid from './services';
import Footer from './Footer';


export default function CustomerSegmentationDashboard() {
  // State for dashboard data
  const [dataset, setDataset] = useState('UCI Online Retail Dataset');
  const [numSegments, setNumSegments] = useState(4);
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  // Dummy data for segments
  const segmentColors = ['#4169E1', '#63B3ED', '#4FD1C5', '#68D391'];
  const segmentData = [
    { name: 'Segment 1', value: 35 },
    { name: 'Segment 2', value: 25 },
    { name: 'Segment 3', value: 20 },
    { name: 'Segment 4', value: 20 },
  ];

  // Dummy bar chart data
  const clusterData = [
    { name: 'Segment 1', value: 5 },
    { name: 'Segment 2', value: 3 },
    { name: 'Segment 3', value: 4 },
    { name: 'Segment 4', value: 6 },
  ];

  // Simulate loading customer data
  useEffect(() => {
    // Mock API call to get customer data
    setTimeout(() => {
      const dummyCustomers = [
        { CustomerID: '12347', Age: 3, Segment: 3 },
        { CustomerID: '12348', Age: 3, Segment: 2 },
        { CustomerID: '12351', Age: 3, Segment: 2 },
        { CustomerID: '12352', Age: 2, Segment: 1 },
        { CustomerID: '12353', Age: 5, Segment: 4 },
        { CustomerID: '12354', Age: 4, Segment: 3 },
        { CustomerID: '12355', Age: 1, Segment: 1 },
      ];
      setCustomers(dummyCustomers);
      setLoading(false);
    }, 1000);
  }, []);

  const handleUpload = () => {
    // This would handle file upload in a real implementation
    alert('File upload functionality would be implemented here');
  };

  const handleRun = () => {
    setLoading(true);
    // Simulate API call to run segmentation
    setTimeout(() => {
      setLoading(false);
      alert('Segmentation completed successfully!');
    }, 1500);
  };

  const handleSegmentChange = (e) => {
    setNumSegments(parseInt(e.target.value));
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      {/* Header */}
      <header className="w-full bg-white border-b border-gray-200">
        <div className="px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <button>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="flex flex-col p-4 space-y-6">
        {/* Tabs */}
        <div className="flex gap-4 border-b border-gray-200">
          <button 
            className={`px-4 py-2 ${activeTab === 'dashboard' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'about' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('about')}
          >
            About
          </button>
        </div>

        {activeTab === 'dashboard' ? (
          <>
            {/* Customer Segments Title */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Customer Segments</h2>
            </div>

            {/* Dataset Selection */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
              <div className="px-4 py-2 bg-white border border-gray-200 rounded">
                {dataset}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-700">Number of Segments</span>
                <select 
                  value={numSegments} 
                  onChange={handleSegmentChange}
                  className="px-4 py-2 bg-white border border-gray-200 rounded"
                >
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>

            {/* Main Content - Two Columns on larger screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column - Custom Dataset */}
              <div className="bg-white border border-gray-200 rounded p-6">
                <h3 className="text-lg font-semibold mb-4">Custom Dataset</h3>
                <div className="flex flex-col space-y-4">
                  <div className="flex gap-2">
                    <button 
                      onClick={handleUpload} 
                      className="flex items-center px-4 py-2 border border-gray-300 rounded"
                    >
                      <Upload size={18} className="mr-2" />
                      Upload File
                    </button>
                    <button 
                      onClick={handleRun}
                      className="px-4 py-2 bg-white border border-gray-300 rounded"
                    >
                      Run
                    </button>
                  </div>
                </div>

                {/* Customer Dataset Table */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">Customer Dataset</h3>
                  {loading ? (
                    <div className="flex justify-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              CustomerID
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Age
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Segment
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {customers.slice(0, 5).map((customer, index) => (
                            <tr key={index}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {customer.CustomerID}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {customer.Age}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {customer.Segment}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column - Segments Visualization */}
              <div className="bg-white border border-gray-200 rounded p-6">
                <h3 className="text-lg font-semibold mb-4">Segments</h3>
                <div className="flex justify-center">
                  <PieChart width={300} height={300}>
                    <Pie
                      data={segmentData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {segmentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={segmentColors[index % segmentColors.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </div>
                
                {/* Legend */}
                <div className="flex justify-center mt-4">
                  <div className="flex flex-wrap gap-4">
                    {segmentData.map((entry, index) => (
                      <div key={index} className="flex items-center">
                        <div 
                          className="w-3 h-3 rounded-full mr-2" 
                          style={{ backgroundColor: segmentColors[index % segmentColors.length] }}
                        ></div>
                        <span className="text-sm text-gray-600">{entry.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          // About Content
          <div className="bg-white border border-gray-200 rounded p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About Customer Segmentation</h2>
            <p className="mb-6">
              This app uses clustering algorithms to segment customers based on purchasing behavior and demographics.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="border border-gray-200 rounded p-4">
                <h3 className="text-lg font-semibold mb-4">Segmentation Clusters</h3>
                <BarChart width={300} height={200} data={clusterData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#4169E1" />
                </BarChart>
              </div>
              
              <div className="border border-gray-200 rounded p-4">
                <h3 className="text-lg font-semibold mb-4">Features Used</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Purchase frequency</li>
                  <li>Average order value</li>
                  <li>Recency of last purchase</li>
                  <li>Total lifetime value</li>
                  <li>Product category preferences</li>
                </ul>
              </div>
            </div>

            

            
            <h3 className="text-lg font-semibold mb-4">How It Works</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Data preprocessing to clean and structure customer transaction data</li>
              <li>Feature engineering to extract meaningful customer behaviors</li>
              <li>Application of K-means clustering algorithm to group similar customers</li>
              <li>Validation of clusters using silhouette score and inertia metrics</li>
              <li>Visualization of results for business insights</li>
              <br></br>
            </ol>

            
            

          </div>
        )}
      </div>
      <ServicesGrid />
      <Footer/>

    </div>
    
  );
}