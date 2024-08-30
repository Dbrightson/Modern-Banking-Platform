import HeaderBox from "@/components/HeaderBox"
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
const Home = async () => {
    const loggedIn = await getLoggedInUser();
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                type='greeting'
                title = 'Welcome'
                user={loggedIn?.name || 'Guest'}
                subtext = "Access and manage your account and transactions efficiently."
                />

                <TotalBalanceBox
                accounts = {[]}
                totalBanks={1}
                totalCurrentBalance={102032.35}
                />
            </header>
            RECENT TRANSACTIONS
        </div>
        <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:2612.29}, {currentBalance:69420.69}]}
        />
    </section>
  )
}

export default Home