import { useEffect, useState } from "react";

interface Account {
  id: string;
  name: string;
  email: string;
  password: string;
}

const Account = () => {
  const [account, setAccount] = useState<Account | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const handleUpdateAccount = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_USER_API_URL}/me/update`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(account),
        }
      );
      if (response.ok) {
        console.log("Account updated successfully");
      }
    } catch (error) {
      console.error("Failed to update account:", error);
    }
  };

  useEffect(() => {
    async function fetchAccount() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_USER_API_URL}/me`
        );
        const data = await response.json();
        setAccount(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch account:", error);
        setLoading(false);
      }
    }

    fetchAccount();
  }, []);

  if (loading) return <p>Loading account information...</p>;

  return (
    <form onSubmit={handleUpdateAccount}>
      <input
        type="text"
        value={account?.name || ""}
        onChange={(e) =>
          setAccount({
            ...account,
            id: account?.id || "",
            name: e.target.value,
            email: account?.email || "",
            password: account?.password || "",
          })
        }
        placeholder="Name"
      />
      <input
        type="email"
        value={account?.email || ""}
        onChange={(e) =>
          setAccount({
            ...account,
            id: account?.id || "",
            name: e.target.value,
            email: account?.email || "",
            password: account?.password || "",
          })
        }
        placeholder="Email"
      />
      <button type="submit" className="bg-blue-500 text-white p-2">
        Update Account
      </button>
    </form>
  );
};

export default Account;
