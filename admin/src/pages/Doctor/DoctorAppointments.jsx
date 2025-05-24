import React, { useContext, useEffect } from 'react';
import { DoctorContext } from '../../context/DoctorContext';
import { AppContext } from '../../context/AppContext';
import { assets } from '../../assets/assets';

const DoctorAppointments = () => {
  const {
    dToken,
    appointments,
    getAppointments,
    cancelAppointment,
    completeAppointment,
  } = useContext(DoctorContext);

  const { slotDateFormat } = useContext(AppContext);

  useEffect(() => {
    if (dToken) {
      getAppointments();
    }
  }, [dToken]);

  return (
    <div className="w-full max-w-6xl m-5">

      <p className="mb-4 text-xl font-semibold text-gray-800">All Appointments</p>

      <div className="bg-white border rounded-md text-sm max-h-[75vh] overflow-y-auto">

        {/* Table Header */}
        <div className="grid grid-cols-[50px_1.5fr_2fr_1fr] font-semibold text-gray-600 bg-gray-50 py-3 px-6 border-b">
          <p>#</p>
          <p>Student</p>
          <p>Date & Time</p>
          <p>Action</p>
        </div>

        {/* Table Rows */}
        {appointments.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[50px_1.5fr_2fr_1fr] items-center text-gray-700 py-3 px-6 border-b hover:bg-gray-50"
          >
            {/* Index */}
            <p>{index + 1}</p>

            {/* Student Info */}
            <div className="flex items-center gap-2">
              <img
                src={item.userData.image}
                alt={item.userData.name}
                className="w-8 h-8 rounded-full"
              />
              <p>{item.userData.name}</p>
            </div>

            {/* Date & Time */}
            <p>{slotDateFormat(item.slotDate)}, {item.slotTime}</p>

            {/* Action */}
            {item.cancelled ? (
              <p className="text-red-500 text-xs font-medium">Cancelled</p>
            ) : item.isCompleted ? (
              <p className="text-green-600 text-xs font-medium">Completed</p>
            ) : (
              <div className="flex gap-2">
                <img
                  onClick={() => cancelAppointment(item._id)}
                  className="w-8 cursor-pointer"
                  src={assets.cancel_icon}
                  alt="Cancel"
                />
                <img
                  onClick={() => completeAppointment(item._id)}
                  className="w-8 cursor-pointer"
                  src={assets.tick_icon}
                  alt="Complete"
                />
              </div>
            )}
          </div>
        ))}

        {appointments.length === 0 && (
          <div className="text-center py-6 text-gray-400">No appointments found.</div>
        )}
      </div>
    </div>
  );
};

export default DoctorAppointments;
