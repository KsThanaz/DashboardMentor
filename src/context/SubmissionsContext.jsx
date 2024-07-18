import React, { createContext, useContext, useState } from 'react';

const SubmissionsContext = createContext();

export const useSubmissions = () => {
  return useContext(SubmissionsContext);
};

export const SubmissionsProvider = ({ children }) => {
  const [submissions, setSubmissions] = useState([
    { id: 1, studentName: 'John Doe', submissionDate: '2024-07-01', evaluationStatus: 'Completed', marks: 85, batch: 'Batch 1', topic: 'Topic A' },
    { id: 2, studentName: 'Jane Smith', submissionDate: '2024-07-02', evaluationStatus: 'Pending', marks: null, batch: 'Batch 1', topic: 'Topic B' },
    { id: 3, studentName: 'Emily Johnson', submissionDate: '2024-07-03', evaluationStatus: 'Completed', marks: 90, batch: 'Batch 2', topic: 'Topic A' },
    { id: 4, studentName: 'Michael Brown', submissionDate: '2024-07-04', evaluationStatus: 'Pending', marks: null, batch: 'Batch 2', topic: 'Topic B' },
    { id: 5, studentName: 'Jessica Davis', submissionDate: '2024-07-05', evaluationStatus: 'Completed', marks: 88, batch: 'Batch 1', topic: 'Topic A' },
    { id: 6, studentName: 'David Wilson', submissionDate: '2024-07-06', evaluationStatus: 'Completed', marks: 92, batch: 'Batch 2', topic: 'Topic B' },
  ]);

  return (
    <SubmissionsContext.Provider value={{ submissions, setSubmissions }}>
      {children}
    </SubmissionsContext.Provider>
  );
};
