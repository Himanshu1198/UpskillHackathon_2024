import Filterbar from '@/MentorshipPage/FindMentor/Filterbar';
import Header from '@/MentorshipPage/FindMentor/Header'
import Mentors from '@/MentorshipPage/FindMentor/Mentors';

export default function MentorMatch() {
    return (
        <>
        <div className='bg-white h-auto overflow-auto'>
			<Header />
			<Filterbar />
			<Mentors />
            
            </div>
        </>
    )
}