import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profile';

const Profiles = (props) => {
  const { getProfiles, profile } = props;
  const { profiles, loading } = profile;

  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      <h1 className='large text-primary'>Developers</h1>
      
      <p className='lead'>
        <i className='fab fa-connectdevelop' /> Browse and connect with
        developers
      </p>

      <div className='profiles'>
        { profiles.length === 0 && (<h4>No profiles found...</h4>)}

        {profiles.length > 0 && (
            profiles.map(profile => (
              <ProfileItem key={profile._id} profile={profile} />
            ))
          )
        }
      </div>
    </>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);
