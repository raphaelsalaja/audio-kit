import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PenWriting4({
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
          d="M12.3056 1.63367C13.1505 0.788777 14.5214 0.788777 15.3663 1.63367C16.2112 2.47856 16.2112 3.84944 15.3663 4.69433L10.1163 9.94433C9.82434 10.2363 9.44401 10.4192 9.10608 10.5397C8.7576 10.6639 8.38861 10.7444 8.06377 10.7976C7.7362 10.8513 7.43587 10.8801 7.21825 10.8956C6.89851 10.9184 6.55232 10.941 6.30563 10.6943C6.05852 10.4472 6.08157 10.102 6.10437 9.78173C6.11987 9.56411 6.14867 9.26377 6.20235 8.93621C6.25558 8.61137 6.33605 8.24237 6.46028 7.8939C6.58075 7.55596 6.76368 7.17563 7.05565 6.88367L12.3056 1.63367Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M1 11.75C1 10.5078 2.00779 9.5 3.25 9.5H3.83549C4.2497 9.5 4.58549 9.83579 4.58549 10.25C4.58549 10.6642 4.2497 11 3.83549 11H3.25C2.83621 11 2.5 11.3362 2.5 11.75C2.5 12.1638 2.83621 12.5 3.25 12.5H14.75C15.9922 12.5 17 13.5078 17 14.75C17 15.9922 15.9922 17 14.75 17H12.75C12.3358 17 12 16.6642 12 16.25C12 15.8358 12.3358 15.5 12.75 15.5H14.75C15.1638 15.5 15.5 15.1638 15.5 14.75C15.5 14.3362 15.1638 14 14.75 14H3.25C2.00779 14 1 12.9922 1 11.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default PenWriting4;
