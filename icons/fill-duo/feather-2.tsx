import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Feather2({
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
          d="M15.3462 2.6538C14.5244 1.8315 13.4312 1.3784 12.2681 1.3784C11.105 1.3784 10.0118 1.8315 9.19 2.6538L4.3057 7.53761C3.7935 8.04931 3.5 8.7583 3.5 9.4819V13.75C3.5 14.0828 3.7207 14.3557 4.0209 14.4536L7.9678 11.0928L6.4584 14.5H8.5181C9.2417 14.5 9.9507 14.2065 10.4624 13.6943L15.3462 8.81001C16.1685 7.98821 16.6216 6.895 16.6216 5.7319C16.6216 4.5688 16.1685 3.4756 15.3462 2.6538Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M1.99999 16.75C1.80809 16.75 1.61619 16.6768 1.46969 16.5303C1.17669 16.2373 1.17669 15.7627 1.46969 15.4698L8.21969 8.7198C8.51269 8.4268 8.98729 8.4268 9.28019 8.7198C9.57309 9.0128 9.57319 9.4874 9.28019 9.7803L2.53019 16.5303C2.38369 16.6768 2.19189 16.75 1.99999 16.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Feather2;
