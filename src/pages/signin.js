import { InputText } from "primereact/inputtext";
import "../../src/app/globals.css";
import { useDispatch } from "react-redux";
import { useCallback } from "react";

const SignIn = () => {
  const dispatch = useDispatch();

  const submitHandle = useCallback(
    async values => {
      let result;
      const payload = {
        ...values,
      };
      result = await dispatch(changePassword(payload));
      if (result) {
        useFormik.resetForm()
        setChangePasswordModal(false);
      }
    },
    [dispatch],
  );

  const { handleBlur, handleChange, errors, values, touched, handleSubmit, resetForm } =
    useFormik({
      enableReinitialize: true,
      initialValues: changePasswordValues,
      validationSchema: changePasswordSchema,
      onSubmit: submitHandle,
    });

  return (
    <div className="h-screen flex items-center justify-center signin-container">
      <form className="bg-white rounded p-4">
        <div className="flex item-center justify-center p-4">
          <h2 className="text-2xl">Sign In</h2>
        </div>
        <div className="mt-2">
          <label>Email</label>
          <InputText type="email" />
        </div>
        <div className="mt-2">
          <label>Password</label>
          <InputText type="password" />
        </div>
        <div className="flex mt-3 item-center justify-center">
          <button className="btn-primary">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
// import "../../src/app/globals.css";

// const SignIn = () => {
//   return (
//     <div className="h-screen bg-slate-50">
//       <div className="flex justify-center items-center">
//         <form className="bg-white text-center p-3 rounded-lg flex flex-col">
//           <div className="mb-3 mt-3">
//             <h2>Sign In</h2>
//           </div>
//           <div>
//             <label>Email</label>
//             <input type="email" />
//           </div>
//           <div>
//             <label>Password</label>
//             <input type="password" />
//           </div>
//           <button className="bg-green-500 px-4 py-1 rounded-md mt-1">
//             Sign In
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignIn;
