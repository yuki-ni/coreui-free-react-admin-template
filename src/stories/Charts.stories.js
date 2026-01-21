import React from 'react'
import Charts from '../views/charts/Charts'
import { CRow, CCol, CCard, CCardHeader, CCardBody } from '@coreui/react'
import { CChartBar, CChartPie, CChartLine } from '@coreui/react-chartjs'
import '@coreui/coreui/dist/css/coreui.min.css'

export default {
  title: 'Components/Charts',
  component: Charts,
  parameters: {
    layout: 'padded',
  },
}

export const FullGallery = {
  render: () => <Charts />,
}

export const SingleChartView = {
  render: () => (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <CCard>
        <CCardHeader>Featured Pie Chart</CCardHeader>
        <CCardBody>
          <CChartPie
            data={{
              labels: ['January', 'February', 'March', 'April', 'May'],
              datasets: [
                {
                  label: 'Projected Sales',
                  backgroundColor: ['yellow', 'red', 'purple', 'green', 'beige'],
                  data: [50, 80, 70, 90, 100],
                },
              ],
            }}
          />
        </CCardBody>
      </CCard>
    </div>
  ),
}

export const ComparisonView = {
  render: () => (
    <CRow>
      <CCol md={6}>
        <CCard>
          <CCardHeader>Distribution</CCardHeader>
          <CCardBody>
            <CChartLine
              data={{
                labels: ['A', 'B', 'C', 'D', 'E'],
                datasets: [{ data: [200, 50, 100, 250, 130], backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'] }],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol md={6}>
        <CCard>
          <CCardHeader>Languages</CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['English', 'Spanish', 'Filipino', 'French'],
                datasets: [{ label: 'Used Languages', data: [30, 15, 20, 5], backgroundColor: ['pink', 'blue', 'orange', 'violet'] }],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  ),
}
