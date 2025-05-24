import React, { useEffect } from 'react'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'

const AllAppointments = () => {
  const { aToken, appointments, cancelAppointment, getAllAppointments } = useContext(AdminContext)
  const { slotDateFormat } = useContext(AppContext)

  useEffect(() => {
    if (aToken) {
      getAllAppointments()
    }
  }, [aToken])

  return (
    <div className='w-full max-w-6xl m-5'>

      <p className='mb-3 text-lg font-semibold'>All Appointments</p>

      <div className='bg-white border rounded text-sm max-h-[80vh] overflow-y-scroll'>

        {/* Header */}
        <div className='hidden sm:grid grid-cols-[0.5fr_2fr_2fr_2fr_1fr] py-3 px-6 border-b font-medium text-gray-600'>
          <p>#</p>
          <p>Student</p>
          <p>Date & Time</p>
          <p>Faculty</p>
          <p>Action</p>
        </div>

        {/* Rows */}
        {appointments.map((item, index) => (
          <div
            key={index}
            className='flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_2fr_2fr_2fr_1fr] items-center text-gray-700 py-3 px-6 border-b hover:bg-gray-50'
          >
            {/* Index */}
            <p className='max-sm:hidden'>{index + 1}</p>

            {/* Student */}
            <div className='flex items-center gap-2'>
              <img src={item.userData.image} className='w-8 h-8 rounded-full object-cover' alt="Student" />
              <p>{item.userData.name}</p>
            </div>

            {/* Date & Time */}
            <p>{slotDateFormat(item.slotDate)}, {item.slotTime}</p>

            {/* Faculty */}
            <div className='flex items-center gap-2'>
              <img src={item.docData.image} className='w-8 h-8 rounded-full object-cover bg-gray-200' alt="Faculty" />
              <p>{item.docData.name}</p>
            </div>

            {/* Action */}
            {item.cancelled ? (
              <p className='text-red-500 text-xs font-semibold'>Cancelled</p>
            ) : item.isCompleted ? (
              <p className='text-green-600 text-xs font-semibold'>Completed</p>
            ) : (
              <img
                onClick={() => cancelAppointment(item._id)}
                className='w-5 cursor-pointer'
                src={assets.cancel_icon}
                alt="Cancel"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllAppointments
