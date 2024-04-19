export const validate = async () => {
  try {
    const res = await fetch("/api/auth/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (res.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};
export const logout = async () => {
  try {
    const res = await fetch("/api/auth/profile", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};
