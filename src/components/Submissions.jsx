
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSubmissions } from '../context/SubmissionsContext';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Menu, MenuItem, Typography, IconButton } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

const Submissions = () => {
  const { submissions } = useSubmissions();
  const [anchorEl, setAnchorEl] = useState(null);
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = (filterType) => {
    setAnchorEl(null);
    setFilter(filterType);
  };

  const filteredSubmissions = submissions.filter((submission) => {
    if (filter === 'All') return true;
    if (filter === 'Batch 1') return submission.batch === 'Batch 1';
    if (filter === 'Batch 2') return submission.batch === 'Batch 2';
    if (filter === 'Topic A') return submission.topic === 'Topic A';
    if (filter === 'Topic B') return submission.topic === 'Topic B';
    return true;
  });

  const handleEvaluateClick = (id) => {
    navigate(`/evaluation/${id}`);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Typography variant="h4">Submissions</Typography>
        <div>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<FilterListIcon />}
            onClick={handleFilterClick}
          >
            Filter
          </Button>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => handleFilterClose('All')}
          >
            <MenuItem onClick={() => handleFilterClose('All')}>All</MenuItem>
            <MenuItem onClick={() => handleFilterClose('Batch 1')}>Batch 1</MenuItem>
            <MenuItem onClick={() => handleFilterClose('Batch 2')}>Batch 2</MenuItem>
            <MenuItem onClick={() => handleFilterClose('Topic A')}>Topic A</MenuItem>
            <MenuItem onClick={() => handleFilterClose('Topic B')}>Topic B</MenuItem>
          </Menu>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="submissions table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Student Name</TableCell>
              <TableCell>Submission Date</TableCell>
              <TableCell>Evaluation Status</TableCell>
              <TableCell>Marks</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredSubmissions.map((submission) => (
              <TableRow key={submission.id}>
                <TableCell>{submission.id}</TableCell>
                <TableCell>{submission.studentName}</TableCell>
                <TableCell>{submission.submissionDate}</TableCell>
                <TableCell>{submission.evaluationStatus}</TableCell>
                <TableCell>{submission.marks}</TableCell>
                <TableCell>
                  {submission.evaluationStatus === 'Pending' && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleEvaluateClick(submission.id)}
                    >
                      Evaluate
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Submissions;
