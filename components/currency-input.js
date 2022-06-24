import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { SelectorIcon } from "@heroicons/react/solid";
import currencies from "../currencies";

export default function CurrencyInput({ value, onChange }) {
  return (
    <div>
      <Listbox value={value} onChange={onChange}>
        {({ open }) => (
          <>
            <Listbox.Label className="block text-sm font-medium text-gray-700">Currency</Listbox.Label>
            <div className="mt-1 relative">
              <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <span className="block truncate">
                  <span className="mr-1">{countryCodeToEmoji(value)}</span>
                  {value}
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                  {currencies.map((option) => (
                    <Listbox.Option
                      key={option}
                      className={({ active }) =>
                        (active ? "text-white bg-indigo-600" : "text-gray-900") +
                        " cursor-default select-none relative py-2 pl-3 pr-9"
                      }
                      value={option}
                    >
                      {({ selected, active }) => (
                        <span className={(selected ? "font-semibold" : "font-normal") + " block truncate"}>
                          <span className="mr-1">{countryCodeToEmoji(option)}</span>
                          {option}
                        </span>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
}

function countryCodeToEmoji(code) {
  return code
    .toLowerCase()
    .substring(0, 2)
    .split("")
    .map((x) => {
      const i = x.charCodeAt(0) - 97;
      return "\ud83c" + String.fromCharCode(0xdde6 + i);
    })
    .join("");
}
