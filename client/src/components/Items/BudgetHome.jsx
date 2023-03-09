import React from 'react';
import NavBar2 from '../NavBar2';
import Footer from '../Footer';
import Budget from './Budget';

const BudgetHome = ({user, yourBudget, setYourBudget}) => {
    return (
      <div>
        <NavBar2 />
        <section class="pt-12 overflow-hidden bg-gray-100 border-0 border-black">
          <div class="container px-4 mx-auto border-0 border-black">
            <div class="py-12 bg-white rounded-xl w-full border-0 border-red-500 mb-6 px-12">
              {user ? (
                <Budget
                  user={user}
                  yourBudget={yourBudget}
                  setYourBudget={setYourBudget}
                />
              ) : <p>hello</p>}
            </div>
          </div>
        </section>
        <Footer />
      </div>

    );
};

export default BudgetHome;