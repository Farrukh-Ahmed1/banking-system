import HeaderBox from "@/components/HeaderBox"
import TotalBalanceBox from "@/components/TotalBalanceBox"

const Home = () => {
  const loggedIn = {firstName : 'Farrukh'}
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
          type = "greeting"
          title = "Welcome"
          user = {loggedIn?.firstName || 'Guest'}
          subtext = "Access & manage your account & transactions effeciently."
          />
          <TotalBalanceBox 
          accounts = {[]}
          totalBanks = {1}
          totalCurrentBalance = {1234.56}
          />
        </header>
      </div>
    </section>
  )
}
export default Home