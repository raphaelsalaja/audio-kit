import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PersonArrowUp({
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
          d="M14.7803 4.46967C14.4874 4.17678 14.0126 4.17678 13.7197 4.46967L11.4697 6.71967C11.1768 7.01256 11.1768 7.48744 11.4697 7.78033C11.7626 8.07322 12.2374 8.07322 12.5303 7.78033L13.5 6.81066V13C13.5 13.4142 13.8358 13.75 14.25 13.75C14.6642 13.75 15 13.4142 15 13V6.81066L15.9697 7.78033C16.2626 8.07322 16.7374 8.07322 17.0303 7.78033C17.3232 7.48744 17.3232 7.01256 17.0303 6.71967L14.7803 4.46967Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M5.75 4.5C6.99264 4.5 8 3.49264 8 2.25C8 1.00736 6.99264 0 5.75 0C4.50736 0 3.5 1.00736 3.5 2.25C3.5 3.49264 4.50736 4.5 5.75 4.5Z"
          fill={secondaryfill}
        />
        <path
          d="M8.73732 6.84691C8.53632 6.20891 8.00032 5.74691 7.33732 5.64091C6.18532 5.45891 5.29471 5.46984 4.14771 5.65184C3.48371 5.75584 2.94771 6.21384 2.74771 6.84684L1.43854 11.0389C1.33554 11.3629 1.36754 11.7059 1.52754 12.0029C1.68854 12.3019 1.95754 12.5179 2.28554 12.6119L3.02754 12.8239L3.20354 16.3369C3.24954 17.2699 4.01754 17.9999 4.95154 17.9999H6.54954C7.48354 17.9999 8.25055 17.2699 8.29754 16.3369L8.47354 12.8229L9.21254 12.6119C9.54054 12.5189 9.80954 12.3019 9.97054 12.0019C10.1325 11.7019 10.1645 11.3579 10.0615 11.0329L8.73732 6.84691Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PersonArrowUp;
