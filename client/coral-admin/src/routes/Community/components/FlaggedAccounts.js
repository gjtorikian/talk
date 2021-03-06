import React from 'react';

import t from 'coral-framework/services/i18n';
import styles from './Community.css';
import EmptyCard from 'coral-admin/src/components/EmptyCard';
import User from './User';

const FlaggedAccounts = (props) => {
  const {commenters} = props;
  const hasResults = commenters && !!commenters.length;

  return (
    <div className={styles.container}>
      <div className={styles.mainFlaggedContent}>
        {
          hasResults
            ? commenters.map((commenter, index) => {
              return <User
                user={commenter}
                key={index}
                index={index}
                modActionButtons={['APPROVE', 'REJECT']}
                showBanUserDialog={props.showBanUserDialog}
                showSuspendUserDialog={props.showSuspendUserDialog}
                showRejectUsernameDialog={props.showRejectUsernameDialog}
                approveUser={props.approveUser}
                currentUser={props.currentUser}
                viewUserDetail={props.viewUserDetail}
              />;
            })
            : <EmptyCard>{t('community.no_flagged_accounts')}</EmptyCard>
        }
      </div>
    </div>
  );
};

export default FlaggedAccounts;
