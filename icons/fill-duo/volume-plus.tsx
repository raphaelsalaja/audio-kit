import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function VolumePlus({
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
          d="M15.5 6.5C15.5 6.08579 15.1642 5.75 14.75 5.75C14.3358 5.75 14 6.08579 14 6.5V8.25H12.25C11.8358 8.25 11.5 8.58579 11.5 9C11.5 9.41421 11.8358 9.75 12.25 9.75H14V11.5C14 11.9142 14.3358 12.25 14.75 12.25C15.1642 12.25 15.5 11.9142 15.5 11.5V9.75H17.25C17.6642 9.75 18 9.41421 18 9C18 8.58579 17.6642 8.25 17.25 8.25H15.5V6.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12 2.664C12 1.67539 10.9072 1.07941 10.0759 1.61119L4.78056 5H2.25C1.00779 5 0 6.00778 0 7.25V10.75C0 11.9922 1.00779 13 2.25 13H4.78051L10.0759 16.3898C10.9072 16.9216 12 16.3256 12 15.337V11.2363C10.875 11.1119 10 10.1581 10 9C10 7.84186 10.875 6.88809 12 6.76373V2.664Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default VolumePlus;
