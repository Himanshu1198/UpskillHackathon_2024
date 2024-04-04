export default function BeMentorForm(){
    return(
        <div className="form-container">
        <section className="p-6 text-left text-gray-900">
<form action="" className="container flex flex-col mx-auto space-y-12">
<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm  bg-gray-50">
    <div className="space-y-2 col-span-full lg:col-span-1 flex justify-center items-center">
        <p className="font-medium text-center flex justify-center items-center">Personal Information</p>
    </div>
    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
        <div className="col-span-full sm:col-span-3">
            <label htmlFor="firstname" className="text-sm">First name</label>
            <input id="firstname" type="text" placeholder="First name" className="h-10 border border-black border-opacity-100 bg-gray-200 w-full rounded-md focus:ring focus:ring-opacity-75  text-gray-50 focus: ring-indigo-600" />
        </div>
        <div className="col-span-full sm:col-span-3">
            <label htmlFor="lastname" className="text-sm">Last name</label>
            <input id="lastname" type="text" placeholder="Last name" className="h-10 border border-black border-opacity-100 bg-gray-200 w-full rounded-md focus:ring focus:ring-opacity-75  text-gray-50 focus: ring-indigo-600 " />
        </div>
        <div className="col-span-full sm:col-span-3">
            <label htmlFor="email" className="text-sm">Email</label>
            <input id="email" type="email" placeholder="Email" className="h-10 border border-black border-opacity-100 bg-gray-200 w-full rounded-md focus:ring focus:ring-opacity-75  text-gray-50 focus: ring-indigo-600 " />
        </div>
        <div className="col-span-full">
            <label htmlFor="address" className="text-sm">Institute Name</label>
            <input id="address" type="text" placeholder="" className="h-10 border border-black border-opacity-100 bg-gray-200 w-full rounded-md focus:ring focus:ring-opacity-75  text-gray-50 focus: ring-indigo-600 " />
        </div>
        <div className="col-span-full sm:col-span-2">
            <label htmlFor="city" className="text-sm">Industry</label>
            <input id="city" type="text" placeholder="" className="h-10 border border-black border-opacity-100 bg-gray-200 w-full rounded-md focus:ring focus:ring-opacity-75  text-gray-50 focus: ring-indigo-600 "/>
        </div>
        <div className="col-span-full sm:col-span-2">
            <label htmlFor="state" className="text-sm">Mentorship Domain</label>
            <input id="state" type="text" placeholder="" className="h-10 border border-black border-opacity-100 bg-gray-200 w-full rounded-md focus:ring focus:ring-opacity-75  text-gray-50 focus: ring-indigo-600 "/>
        </div>
        <div className="col-span-full sm:col-span-2">
            <label htmlFor="zip" className="text-sm">Work Experience</label>
            <input id="zip" type="text" placeholder="" className="h-10 border border-black border-opacity-100 bg-gray-200 w-full rounded-md focus:ring focus:ring-opacity-75  text-gray-50 focus: ring-indigo-600 "/>
        </div>
    </div>
</fieldset>
<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm  bg-gray-50">
    <div className="space-y-2 col-span-full lg:col-span-1 flex justify-center items-center">
        <p className="font-medium text-center">Profile</p>
    </div>
    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
        <div className="col-span-full sm:col-span-3">
            <label htmlFor="username" className="text-sm">Username</label>
            <input id="username" type="text" placeholder="Username" className="h-10 border border-black border-opacity-100 bg-gray-200 w-full rounded-md focus:ring focus:ring-opacity-75  text-gray-50 focus: ring-indigo-600 " />
        </div>
        <div className="col-span-full sm:col-span-3">
            <label htmlFor="website" className="text-sm">Profile Link</label>
            <input id="website" type="text" placeholder="https://" className="h-10 border border-black border-opacity-100 bg-gray-200 w-full rounded-md focus:ring focus:ring-opacity-75  text-gray-50 focus: ring-indigo-600 " />
        </div>
        <div className="col-span-full">
            <label htmlFor="bio" className="text-sm">Bio</label>
            <textarea id="bio" placeholder="" className="h-32 border border-black border-opacity-100 bg-gray-200 w-full rounded-md focus:ring focus:ring-opacity-75  text-gray-50 focus: ring-indigo-600 "></textarea>
        </div>
        <div className="col-span-full">
            <div className="flex items-center justify-end space-x-2">
                <button type="button" className="px-4 py-2 border rounded-md bg-blue-700 border-gray-800">Save</button>
            </div>
        </div>
    </div>
</fieldset>
</form>
</section>
    </div>
    )
}