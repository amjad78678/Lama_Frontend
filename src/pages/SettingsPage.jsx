import React from 'react'
import Settings from '../components/settings/Settings'
import { useQuery } from '@tanstack/react-query';
import { getUserData } from '../api/server';
import Loader from '../components/common/Loader';

const SettingsPage = () => {
  const {
    isLoading,
    data: user,
    refetch,
  } = useQuery({
    queryKey: ["userDataInSettings"],
    queryFn: getUserData,
  });
  return isLoading || !user ?(<Loader/>): (
    <div>
        <Settings {...{user,refetch}}/>
    </div>
  )
}

export default SettingsPage