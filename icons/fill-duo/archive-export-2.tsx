import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArchiveExport2({
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
          d="M16 7.48627C15.3999 7.41993 14.8709 7.11757 14.5079 6.67406L13.341 7.84099C12.4623 8.71967 11.0377 8.71967 10.159 7.84099C9.28033 6.96231 9.28033 5.53769 10.159 4.65901L11.3259 3.49208C10.8824 3.12911 10.5801 2.60012 10.5137 2H4.75C3.23054 2 2 3.23203 2 4.75V11.25C2 11.6642 2.33579 12 2.75 12H5.5V14.5H12.5V12H15.25C15.6642 12 16 11.6642 16 11.25V7.48627Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M12 11H14H16V13.25C16 14.767 14.767 16 13.25 16H4.75C3.233 16 2 14.767 2 13.25V11H3.5H6C6.414 11 6.75 11.336 6.75 11.75V13.25C6.75 13.388 6.862 13.5 7 13.5H11C11.138 13.5 11.25 13.388 11.25 13.25V11.75C11.25 11.336 11.586 11 12 11Z"
          fill={fill}
        />
        <path
          d="M12.75 1C12.3358 1 12 1.33579 12 1.75C12 2.16421 12.3358 2.5 12.75 2.5H14.4393L11.2197 5.71967C10.9268 6.01256 10.9268 6.48744 11.2197 6.78033C11.5126 7.07322 11.9874 7.07322 12.2803 6.78033L15.5 3.56066V5.25C15.5 5.66421 15.8358 6 16.25 6C16.6642 6 17 5.66421 17 5.25V1.75C17 1.33579 16.6642 1 16.25 1H12.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ArchiveExport2;
