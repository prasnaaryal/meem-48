function Award() {
  return (
    <div className="bg-head py-6 px-[112px]">
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-[193px]">
        <div className="flex justify-center items-center">
          <h6 className="text-white tex-base font-normal leading-8 rotate-90">
            Awards
          </h6>
        </div>
        <div className="flex justify-center items-center">
          <div className="h-px w-16 bg-white opacity-50" />
        </div>
        <div className="flex justify-center items-center gap-3">
          <img src="/assets/images/award1.svg" alt="award" />
          <p className="text-sm text-ashGrey font-normal leading-6 w-36">
            German Design Award 2021
          </p>
        </div>
      </div>
    </div>
  );
}

export default Award;
