import SubPageHeader from '../components/shared/SubPageHeader';
import CommitteeList from '../components/committee/CommitteeList';

export default function CommitteePage() {
  return (
    <>
      <SubPageHeader title="Committee" />
      <CommitteeList />
    </>
  );
}
