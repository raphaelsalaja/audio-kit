import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PinSearch({
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
          d="M13.5 11C11.8428 11 10.5 12.3428 10.5 14C10.5 15.6572 11.8428 17 13.5 17C14.0564 17 14.5774 16.8486 15.024 16.5848L16.2197 17.7804C16.5126 18.0733 16.9874 18.0733 17.2803 17.7804C17.5732 17.4875 17.5732 17.0126 17.2803 16.7198L16.0847 15.5241C16.3486 15.0775 16.5 14.5565 16.5 14C16.5 12.3428 15.1572 11 13.5 11ZM12 14C12 13.1712 12.6712 12.5 13.5 12.5C14.3288 12.5 15 13.1712 15 14C15 14.8288 14.3288 15.5 13.5 15.5C12.6712 15.5 12 14.8288 12 14Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M1.5 8.25C1.5 4.52392 4.52195 1.5 8.25 1.5C11.9781 1.5 15 4.52392 15 8.25C15 8.75041 14.9509 9.23763 14.8615 9.70955C14.432 9.57343 13.9746 9.5 13.5 9.5C11.0144 9.5 9 11.5144 9 14C9 15.0218 9.34042 15.964 9.91405 16.7193C9.38624 17.0731 8.88526 17.3359 8.47585 17.4652C8.32886 17.5116 8.17114 17.5116 8.02415 17.4652C7.5159 17.3047 6.86652 16.9385 6.1999 16.4477C5.52063 15.9477 4.77887 15.2854 4.08989 14.4916C2.72115 12.9149 1.5 10.7465 1.5 8.25ZM10.25 8.25C10.25 9.35457 9.35457 10.25 8.25 10.25C7.14543 10.25 6.25 9.35457 6.25 8.25C6.25 7.14543 7.14543 6.25 8.25 6.25C9.35457 6.25 10.25 7.14543 10.25 8.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default PinSearch;
