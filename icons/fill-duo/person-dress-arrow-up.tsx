import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PersonDressArrowUp({
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
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.0025 4.5C7.24514 4.5 8.2525 3.49264 8.2525 2.25C8.2525 1.00736 7.24514 0 6.0025 0C4.75986 0 3.7525 1.00736 3.7525 2.25C3.7525 3.49264 4.75986 4.5 6.0025 4.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9.01952 6.92079C8.83652 6.25679 8.27952 5.75779 7.60152 5.65279C6.47552 5.47479 5.55627 5.4748 4.42327 5.6508C3.73727 5.7578 3.17527 6.2548 2.99227 6.9198L1.20353 13.4162C1.09953 13.7952 1.17553 14.1922 1.41353 14.5062C1.65253 14.8192 2.01453 14.9992 2.40853 14.9992H3.31253L3.42853 16.3952C3.50453 17.2952 4.27053 17.9992 5.17253 17.9992H6.83253C7.73553 17.9992 8.50153 17.2942 8.57653 16.3952L8.69253 14.9992H9.59553C9.98953 14.9992 10.3515 14.8192 10.5905 14.5062C10.8285 14.1932 10.9055 13.7962 10.8005 13.4172L9.01952 6.92079Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default PersonDressArrowUp;
