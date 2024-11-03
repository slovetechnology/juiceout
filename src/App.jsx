

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { RouteHandlers } from './routes'
import Layout from './pages/Layout'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      {RouteHandlers.map((item, index) => (
        <Route key={index} path={item.path} element={<Layout> <item.component /> </Layout>} />
      ))}
    </Routes>
    </BrowserRouter>
  )
}
