import React from 'react';

const ServicesGrid = () => {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f7f7f7',
      padding: '40px 0',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        width: '80%',
        margin: '0 auto'
      }}>
        <div style={{
          backgroundColor: '#d0f5cf',
          padding: '20px',
          textAlign: 'center',
          borderRadius: '10px',
          transition: 'background-color 0.3s ease'
        }}>
          <div style={{ fontSize: '40px', marginBottom: '10px' }}>📦</div>
          <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#333' }}>Export & Pack House</h3>
          <p style={{ fontSize: '14px', color: '#666' }}>Driving higher profit margins with precise export documentation and optimized pack house operations.</p>
        </div>

        <div style={{
          backgroundColor: '#f1f1f1',
          padding: '20px',
          textAlign: 'center',
          borderRadius: '10px',
          transition: 'background-color 0.3s ease',
          ':hover': { backgroundColor: '#ddd' }
        }}>
          <div style={{ fontSize: '40px', marginBottom: '10px' }}>👥</div>
          <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#333' }}>FPO/ Co-operative</h3>
          <p style={{ fontSize: '14px', color: '#666' }}>Helping FPOs in empowering farmers to develop new market opportunities and strengthen their position in the marketplace.</p>
        </div>

        <div style={{
          backgroundColor: '#d0f5cf',
          padding: '20px',
          textAlign: 'center',
          borderRadius: '10px',
          transition: 'background-color 0.3s ease'
        }}>
          <div style={{ fontSize: '40px', marginBottom: '10px' }}>📦</div>
          <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#333' }}>Export & Pack House</h3>
          <p style={{ fontSize: '14px', color: '#666' }}>Driving higher profit margins with precise export documentation and optimized pack house operations.</p>
        </div>

        <div style={{
          backgroundColor: '#f1f1f1',
          padding: '20px',
          textAlign: 'center',
          borderRadius: '10px',
          transition: 'background-color 0.3s ease',
          ':hover': { backgroundColor: '#ddd' }
        }}>
          <div style={{ fontSize: '40px', marginBottom: '10px' }}>👥</div>
          <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#333' }}>FPO/ Co-operative</h3>
          <p style={{ fontSize: '14px', color: '#666' }}>Helping FPOs in empowering farmers to develop new market opportunities and strengthen their position in the marketplace.</p>
        </div>

        <div style={{
          backgroundColor: '#d0f5cf',
          padding: '20px',
          textAlign: 'center',
          borderRadius: '10px',
          transition: 'background-color 0.3s ease'
        }}>
          <div style={{ fontSize: '40px', marginBottom: '10px' }}>📦</div>
          <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#333' }}>Export & Pack House</h3>
          <p style={{ fontSize: '14px', color: '#666' }}>Driving higher profit margins with precise export documentation and optimized pack house operations.</p>
        </div>

        <div style={{
          backgroundColor: '#f1f1f1',
          padding: '20px',
          textAlign: 'center',
          borderRadius: '10px',
          transition: 'background-color 0.3s ease',
          ':hover': { backgroundColor: '#ddd' }
        }}>
          <div style={{ fontSize: '40px', marginBottom: '10px' }}>👥</div>
          <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#333' }}>FPO/ Co-operative</h3>
          <p style={{ fontSize: '14px', color: '#666' }}>Helping FPOs in empowering farmers to develop new market opportunities and strengthen their position in the marketplace.</p>
        </div>

        
        
      </div>
    </div>
  );
};

export default ServicesGrid;
