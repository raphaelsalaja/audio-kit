import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Users2({
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
          d="M14.3008 13.4531C14.3081 12.8919 14.1954 12.3103 13.9139 11.7536C13.4414 10.8194 12.7631 9.94004 11.9687 9.26953C11.7104 9.0515 12.2575 8.74902 12.5015 8.74902C14.3699 8.74902 15.9857 9.81955 16.7749 11.3796C17.1233 12.0686 16.7496 12.91 16.0206 13.1635C15.8455 13.2243 14.2963 13.7941 14.3008 13.4531Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M14.75 4C14.75 5.24264 13.7426 6.25 12.5 6.25C12.4279 6.25 11.7138 6.17876 11.7612 6.03121C11.9162 5.54864 12 5.0341 12 4.5C12 3.64631 11.7861 2.8426 11.4088 2.13953L12.5 1.75C13.7426 1.75 14.75 2.75736 14.75 4Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.04 14.817C11.877 14.526 12.306 13.56 11.906 12.769C11 10.978 9.145 9.74902 7 9.74902C4.855 9.74902 3 10.977 2.094 12.769C1.694 13.56 2.122 14.526 2.96 14.817C3.991 15.175 5.368 15.5 7 15.5C8.632 15.5 10.009 15.175 11.04 14.817Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7 7.25C8.51878 7.25 9.75 6.01878 9.75 4.5C9.75 2.98122 8.51878 1.75 7 1.75C5.48122 1.75 4.25 2.98122 4.25 4.5C4.25 6.01878 5.48122 7.25 7 7.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.4764 6.2485C12.4845 6.2485 12.4919 6.25049 12.5 6.25049C13.743 6.25049 14.75 5.24339 14.75 4.00049C14.75 2.75759 13.743 1.75049 12.5 1.75049C12.3531 1.75049 12.2121 1.77199 12.0739 1.80099"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.0389 13.4355C15.4228 13.3413 15.7847 13.2382 16.096 13.1274C16.798 12.8774 17.106 12.0505 16.771 11.3845C15.985 9.82149 14.369 8.74951 12.5 8.74951"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Users2;
