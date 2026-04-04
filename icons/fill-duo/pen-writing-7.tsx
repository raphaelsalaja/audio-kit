import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PenWriting7({
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
          d="M12.4097 2.84199L4.60066 10.651C3.73766 11.515 3.19966 14.057 3.00766 15.11C2.96366 15.352 3.04166 15.601 3.21566 15.775C3.35766 15.917 3.54866 15.995 3.74566 15.995C3.78966 15.995 3.83466 15.991 3.87966 15.983C4.93266 15.792 7.47466 15.254 8.33866 14.39L16.1477 6.58099C17.1777 5.54999 17.1777 3.87399 16.1477 2.84299C15.1497 1.84499 13.4077 1.84499 12.4097 2.84199Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M1 2.75C1 2.33579 1.33579 2 1.75 2H8.25C8.66421 2 9 2.33579 9 2.75C9 3.16421 8.66421 3.5 8.25 3.5H1.75C1.33579 3.5 1 3.16421 1 2.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 6.25C1 5.83579 1.33579 5.5 1.75 5.5H4.25C4.66421 5.5 5 5.83579 5 6.25C5 6.66421 4.66421 7 4.25 7H1.75C1.33579 7 1 6.66421 1 6.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default PenWriting7;
