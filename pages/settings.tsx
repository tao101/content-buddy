import Header from '@/components/header';
import { AppState } from '@/store';
import { settingState } from '@/store/features/settings';
import { useSelector } from 'react-redux';

export default function Settings() {
  const settings = useSelector(settingState);
  console.log(settings);

  return (
    <main className=" w-full min-h-screen  ">
      <Header />
      <div className="p-5">
        <h1>Settings</h1>
        <div className="mt-10">
          <label
            htmlFor="apiKey"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            OpenAI API KEY
          </label>
          <input
            type="text"
            id="apiKey"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Your OpenAI API KEY"
            required
          />
        </div>
      </div>
    </main>
  );
}
