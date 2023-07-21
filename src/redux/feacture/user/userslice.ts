import { auth, googleProvider } from '@/firebase/firebase.config';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import { toast } from 'react-hot-toast';


interface IUserState {
  user: {
    email: string | null;
  };
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}
interface ICredential {
    email: string;
    password: string;
}

const initialState: IUserState = {
  user: {
    email: null,
  },
  isLoading: false,
  isError: false,
  error: null,
};

export const createUser = createAsyncThunk(
  'user/createUser',
  async ({ email, password }: ICredential) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    if(data.user.email){
      toast.success("Sing up Successfully")
    }
    return data.user.email;
  }
);

export const singinUser = createAsyncThunk(
    'user/loginUser',
    async ({ email, password }: ICredential) => {
      const data = await signInWithEmailAndPassword(auth, email, password);
      if(data.user.email){
        toast.success("Sing In Successfully")
      }
      return data.user.email;
    }
);


export const signInWithGoogle = createAsyncThunk(
  'user/signInWithGoogle',
  async () => {
    try {

      const data = await signInWithPopup(auth, googleProvider);
      if (data.user.email) {
        toast.success('Signed in with Google successfully');

      }
      return data.user.email;
    } catch (error) {
      toast.error('Failed to sign in with Google');
      throw error;
    }
  }
);

const userSlice = createSlice({
  name: 'user ',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string | null>) => {
      state.user.email = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.user.email = action.payload;
        state.isLoading = false;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.user.email = null;
        state.isLoading = false;
        state.isError = true;
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        state.error = action.error.message!;
      })
      .addCase(singinUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(singinUser.fulfilled, (state, action) => {
        state.user.email = action.payload;
        state.isLoading = false;
      })
      .addCase(singinUser.rejected, (state, action) => {
        state.user.email = null;
        state.isLoading = false;
        state.isError = true;
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        state.error = action.error.message!;
      })
      .addCase(signInWithGoogle.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(signInWithGoogle.fulfilled, (state, action) => {
        state.user.email = action.payload;
        state.isLoading = false;
      })
      .addCase(signInWithGoogle.rejected, (state, action) => {
        state.user.email = null;
        state.isLoading = false;
        state.isError = true;
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        state.error = action.error.message!;
      });
  },
});

export const { setUser, setLoading } = userSlice.actions;

export default userSlice.reducer;
