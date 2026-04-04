import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BellSnooze({
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
          d="M10.5302 1.92857C10.0181 1.73968 9.57764 1.7501 9 1.7501C6.377 1.7501 4.25 3.8771 4.25 6.5001V10.7561C4.25 11.8611 3.355 12.7561 2.25 12.7561H15.75C14.645 12.7561 13.75 11.8611 13.75 10.7561V7.5001H12.75C11.8671 7.5001 11.0659 6.98379 10.7011 6.17984C10.3362 5.37589 10.4753 4.43288 11.0567 3.76846L11.5789 3.17168C11.1535 2.9119 10.7081 2.40128 10.5302 1.92857Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M10.5 15.3843C10.2005 15.9018 9.6409 16.25 9 16.25C8.3591 16.25 7.7995 15.9018 7.5 15.3843"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.8082 1.8315C9.5443 1.7861 9.2768 1.75 9 1.75C6.377 1.75 4.25 3.877 4.25 6.5V10.75C4.25 11.855 3.355 12.75 2.25 12.75H15.75C14.645 12.75 13.75 11.855 13.75 10.75V8.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 1.25H16.25L12.75 5.25H16.25"
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

export default BellSnooze;
