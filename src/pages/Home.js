import React from "react";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import TransactionForm from "../components/TransactionForm";
import TransactionsList from "../components/TransactionsList";
import Cookies from "js-cookie";
import TransactionChart from "../components/TransactionChart";
import CircularLoader from "../common-ui-components/Loader";

function Home() {
  const [transactions, setTransactions] = useState([]);
  const [editTransaction, setEditTransaction] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchTransaction();
  }, []);

  const fetchTransaction = async () => {
    setLoading(true);
    const token = Cookies.get("token");

    const res = await fetch(`${process.env.REACT_APP_API_URL}/transaction`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { data } = await res.json();
    setTransactions(data);
    setLoading(false);
  };

  return (
    <Container>
      {loading ? (
        <CircularLoader />
      ) : (
        <>
          {transactions.length > 0 && <TransactionChart data={transactions} />}
          <TransactionForm
            fetchTransaction={fetchTransaction}
            editTransaction={editTransaction}
            setEditTransaction={setEditTransaction}
          />
          <TransactionsList
            data={transactions}
            fetchTransaction={fetchTransaction}
            setEditTransaction={setEditTransaction}
          />
        </>
      )}
    </Container>
  );
}

export default Home;
