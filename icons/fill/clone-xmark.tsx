import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloneXmark({
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
          d="M14.5001 5.11719V10.25C14.5001 12.5933 12.5934 14.5 10.2501 14.5H5.11719C5.44609 15.6506 6.49529 16.5 7.75009 16.5H13.7501C15.2667 16.5 16.5001 15.2666 16.5001 13.75V7.75C16.5001 6.4951 15.6507 5.44579 14.5001 5.11719Z"
          fill={secondaryfill}
        />
        <path
          d="M10.25 1.5H4.25C2.7334 1.5 1.5 2.7334 1.5 4.25V10.25C1.5 11.7666 2.7334 13 4.25 13H10.25C11.7666 13 13 11.7666 13 10.25V4.25C13 2.7334 11.7666 1.5 10.25 1.5ZM9.7803 8.7197C10.0733 9.0127 10.0733 9.48731 9.7803 9.78021C9.6338 9.92671 9.4424 9.99991 9.25 9.99991C9.0576 9.99991 8.8662 9.92671 8.7197 9.78021L7.25 8.31049L5.7803 9.78021C5.6338 9.92671 5.4424 9.99991 5.25 9.99991C5.0576 9.99991 4.8662 9.92671 4.7197 9.78021C4.4267 9.48721 4.4267 9.0126 4.7197 8.7197L6.18939 7.25L4.7197 5.7803C4.4267 5.4873 4.4267 5.01269 4.7197 4.71979C5.0127 4.42689 5.48731 4.42679 5.78021 4.71979L7.24991 6.18951L8.7196 4.71979C9.0126 4.42679 9.48719 4.42679 9.78009 4.71979C10.073 5.01279 10.0731 5.4874 9.78009 5.7803L8.31039 7.25L9.7803 8.7197Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CloneXmark;
