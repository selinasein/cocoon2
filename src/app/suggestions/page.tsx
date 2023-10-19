"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

function SuggestionsPage() {
  const dispatch = useAppDispatch();
  const { missingSkills, transferableSkills } = useAppSelector(
    (state) => state.resumeProcessingSlice
  );

  return (
    <div className="flex flex-col justify-center items-center align-middle">
      <h1>Suggestions</h1>
      <p className="text-lg font-semibold mb-5">
        Transitioning to: Web and Digital Interface Designers
      </p>
      <div className="w-3/4 mt-6 flex">
        <div className="w-1/2">
          {transferableSkills.length > 0 && (
            <p className="text-lg font-semibold mb-5">
              Transferable Skills From Resume:
            </p>
          )}
          {transferableSkills.length > 0 &&
            transferableSkills.map((phrase, index) => (
              <div key={index} className="flex flex-col mb-4">
                <p className="text-sm font-semibold">- {phrase}</p>
              </div>
            ))}
        </div>
        <div className="w-1/2">
          {missingSkills.length > 0 && (
            <p className="text-lg font-semibold mb-5">
              Missing Career Required Skills:
            </p>
          )}
          {missingSkills.map((phrase, index) => (
            <div key={index} className="flex flex-col mb-4">
              <p className="text-sm font-semibold">- {phrase}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SuggestionsPage;
