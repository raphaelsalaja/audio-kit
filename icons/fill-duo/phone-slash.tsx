import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PhoneSlash({
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
          d="M7.59104 10.409C7.04196 9.85936 6.54949 9.2529 6.12252 8.59844L7.32615 7.36907C7.93515 6.88107 8.13915 6.04207 7.82315 5.32907L6.52315 2.40107C6.18015 1.62907 5.33815 1.22307 4.51915 1.43407L2.54452 1.94844C1.69852 2.16844 1.15152 2.98844 1.27152 3.85544C1.73833 7.17855 3.29447 10.1637 5.56479 12.4352L7.59104 10.409Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9.34163 11.8404L7.27287 13.9091C9.25402 15.3784 11.6032 16.3766 14.1515 16.7344C14.2315 16.7454 14.3095 16.7504 14.3875 16.7504C15.1615 16.7504 15.8555 16.2284 16.0565 15.4604L16.566 13.4966C16.777 12.6796 16.371 11.8376 15.6 11.4946L12.674 10.1956C11.961 9.87858 11.123 10.0816 10.634 10.6896L9.34163 11.8404C9.36089 11.8531 9.32229 11.8277 9.34163 11.8404Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M16.5303 1.46967C16.8232 1.76256 16.8232 2.23744 16.5303 2.53033L2.53033 16.5303C2.23744 16.8232 1.76256 16.8232 1.46967 16.5303C1.17678 16.2374 1.17678 15.7626 1.46967 15.4697L15.4697 1.46967C15.7626 1.17678 16.2374 1.17678 16.5303 1.46967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default PhoneSlash;
