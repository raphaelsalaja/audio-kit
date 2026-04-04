import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SoapDispenser({
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
          d="M7.25 5H10.75C10.9568 5 11.1717 5.06297 11.367 5.12484C11.662 5.21823 12.0551 5.38506 12.45 5.68125C13.2725 6.29815 14 7.4 14 9.25V14.25C14 15.7692 12.7692 17 11.25 17H6.75C5.23079 17 4 15.7692 4 14.25V9.25C4 7.40876 4.72871 6.30854 5.54839 5.69033C5.94224 5.39329 6.33426 5.22445 6.62842 5.12924C6.82457 5.06575 7.04166 5 7.25 5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M13.957 8.5C13.9851 8.73515 14 8.98489 14 9.25V13.5H8.75C8.33579 13.5 8 13.1642 8 12.75V9.25C8 8.83579 8.33579 8.5 8.75 8.5H13.957Z"
          fill={fill}
        />
        <path
          d="M7 2.75C7 1.78379 7.78379 1 8.75 1H10.25H13.25C13.6642 1 14 1.33579 14 1.75C14 2.16421 13.6642 2.5 13.25 2.5H11V5.02607C10.9166 5.01005 10.8326 5 10.75 5H7.25C7.16743 5 7.08348 5.01033 7 5.02675V2.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SoapDispenser;
