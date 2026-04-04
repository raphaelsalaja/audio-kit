import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SortAlphaDescending({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M4.70199 1.25C4.39017 1.25 4.11087 1.44294 4.00052 1.73459L1.91952 7.23459C1.77294 7.622 1.96817 8.05489 2.35558 8.20147C2.74299 8.34805 3.17588 8.15282 3.32246 7.76541L3.70665 6.75H6.27113L6.65556 7.76552C6.8022 8.15291 7.23512 8.34807 7.6225 8.20143C8.00989 8.05478 8.20505 7.62187 8.05841 7.23448L5.97641 1.73448C5.86603 1.44289 5.58676 1.25 5.27498 1.25H4.70199ZM5.70332 5.25L4.98859 3.3619L4.2742 5.25H5.70332Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2.08198 10C2.08198 9.58579 2.41776 9.25 2.83198 9.25H7.14497C7.43195 9.25 7.69378 9.41377 7.81936 9.67183C7.94493 9.92988 7.91224 10.237 7.73515 10.4628L4.37321 14.75H7.14497C7.55918 14.75 7.89497 15.0858 7.89497 15.5C7.89497 15.9142 7.55918 16.25 7.14497 16.25H2.83198C2.54499 16.25 2.28316 16.0862 2.15759 15.8282C2.03201 15.5701 2.0647 15.263 2.2418 15.0372L5.60373 10.75H2.83198C2.41776 10.75 2.08198 10.4142 2.08198 10Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M14 3.5C14 3.08579 13.6642 2.75 13.25 2.75C12.8358 2.75 12.5 3.08579 12.5 3.5V12.1893L11.0303 10.7197C10.7374 10.4268 10.2626 10.4268 9.96967 10.7197C9.67678 11.0126 9.67678 11.4874 9.96967 11.7803L12.7197 14.5303C13.0126 14.8232 13.4874 14.8232 13.7803 14.5303L16.5303 11.7803C16.8232 11.4874 16.8232 11.0126 16.5303 10.7197C16.2374 10.4268 15.7626 10.4268 15.4697 10.7197L14 12.1893V3.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SortAlphaDescending;
