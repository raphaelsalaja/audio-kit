import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PersonArrowDown({
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
          d="M15 5.00146C15 4.58725 14.6642 4.25146 14.25 4.25146C13.8358 4.25146 13.5 4.58725 13.5 5.00146V11.1908L12.5303 10.2211C12.2374 9.92824 11.7626 9.92824 11.4697 10.2211C11.1768 10.514 11.1768 10.9889 11.4697 11.2818L13.7197 13.5318C14.0126 13.8247 14.4874 13.8247 14.7803 13.5318L17.0303 11.2818C17.3232 10.9889 17.3232 10.514 17.0303 10.2211C16.7374 9.92824 16.2626 9.92824 15.9697 10.2211L15 11.1908V5.00146Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5.75 4.5C6.99264 4.5 8 3.49264 8 2.25C8 1.00736 6.99264 0 5.75 0C4.50736 0 3.5 1.00736 3.5 2.25C3.5 3.49264 4.50736 4.5 5.75 4.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M8.73732 6.84691C8.53632 6.20891 8.00032 5.74691 7.33732 5.64091C6.18532 5.45891 5.29471 5.46984 4.14771 5.65184C3.48371 5.75584 2.94771 6.21384 2.74771 6.84684L1.43854 11.0389C1.33554 11.3629 1.36754 11.7059 1.52754 12.0029C1.68854 12.3019 1.95754 12.5179 2.28554 12.6119L3.02754 12.8239L3.20354 16.3369C3.24954 17.2699 4.01754 17.9999 4.95154 17.9999H6.54954C7.48354 17.9999 8.25055 17.2699 8.29754 16.3369L8.47354 12.8229L9.21254 12.6119C9.54054 12.5189 9.80954 12.3019 9.97054 12.0019C10.1325 11.7019 10.1645 11.3579 10.0615 11.0329L8.73732 6.84691Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default PersonArrowDown;
