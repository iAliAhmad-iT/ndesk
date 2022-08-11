import React from 'react';
import AddMember from '../AddMembers/AddMember'
import EditMember from '../AddMembers/EditMember';
import ListMember from '../AddMembers/ListMember';
import ViewMember from '../AddMembers/ViewMember';

export const Members = () => {
  return (
    <div className='reports'>
      <h1>Members</h1>
    </div>
  );
};

export const AddMembers = () => {
  return (
    <div className='reports'>
        <AddMember/>
    </div>
  );
};

export const EditMembers = () => {
  return (
    <div className='reports'>
      <EditMember/>
    </div>
  );
};

export const ViewMembers = () => {
  return (
    <div className='reports'>
      <ViewMember/>
    </div>
  );
};

export const ListMembers = () => {
  return (
    <div className='reports'>
      <ListMember/>
    </div>
  );
};
