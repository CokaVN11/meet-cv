"use client";

import { FormField } from "pages/components/FormField";

export const CompanyAddProposal = () => {
  return (
    <div className="border-b border-gray-900/10 pb-12 px-10">
      <h1 className="text-center font-bold text-2xl">
        Create advertising proposal
      </h1>
      <form>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
 
          <FormField containerClassName="sm:col-span-3" id="job-title" label="Job Title" type="text" placeholder="Eg. Senior Software Engineer" required />
          <FormField containerClassName="sm:col-span-3" id="quantity" label="Quantity" type="text" placeholder="Eg. 10" required />
          <FormField containerClassName="sm:col-span-3" id="start-date" label="Start Date" type="date" placeholder="Eg. 2022-12-31" required />
          <FormField containerClassName="sm:col-span-3" id="length" label="Advertising Length" type="number" placeholder="Eg. 14" required min="1" max="365" unit="days"/>
          <FormField containerClassName="sm:col-span-full" id="job-desc" label="Job Description" type="textarea" placeholder="Eg. We are looking for a Senior Software Engineer to join our team." required />
  

          <fieldset className="sm:col-span-full">
            <legend className="text-sm font-medium leading-6 text-gray-900 w-full text-left">
              Advertising Options<span className="text-red-500">*</span>
            </legend>
            <div className="mt-6 flex flex-row items-center w-full space-x-4">
              <div className="flex items-center gap-x-3">
                <input
                  required
                  id="newspaper"
                  name="ads-format"
                  type="radio"
                  value="newspaper"
                  className="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-600"
                />
                <label
                  htmlFor="newspaper"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Newspaper
                </label>
              </div>
              <div className="flex items-center gap-x-3">
                <input
                  required
                  id="banner"
                  name="ads-format"
                  type="radio"
                  value="banner"
                  className="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-600"
                />
                <label
                  htmlFor="banner"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Banner
                </label>
              </div>
              <div className="flex items-center gap-x-3">
                <input
                  required
                  id="online"
                  name="ads-format"
                  type="radio"
                  value="online"
                  className="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-600"
                />
                <label
                  htmlFor="online"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Online
                </label>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="mt-6 flex items-center justify-center gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-amber-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};
