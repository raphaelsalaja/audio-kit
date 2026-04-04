import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EnvelopeContent({
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
          d="M3 1.75C3 0.783786 3.78379 0 4.75 0H13.25C14.2162 0 15 0.783786 15 1.75V9.3838C15 9.66824 14.8391 9.92821 14.5845 10.0551L9.33451 12.6713C9.12387 12.7762 8.87618 12.7762 8.66553 12.6713L3.41553 10.0555C3.16093 9.92863 3 9.66866 3 9.3842V1.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5.5 3.75C5.5 3.33579 5.83579 3 6.25 3H11.75C12.1642 3 12.5 3.33579 12.5 3.75C12.5 4.16421 12.1642 4.5 11.75 4.5H6.25C5.83579 4.5 5.5 4.16421 5.5 3.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5.5 6.75C5.5 6.33579 5.83579 6 6.25 6H11.75C12.1642 6 12.5 6.33579 12.5 6.75C12.5 7.16421 12.1642 7.5 11.75 7.5H6.25C5.83579 7.5 5.5 7.16421 5.5 6.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2.07606 7.07459C1.84365 6.96239 1.56987 6.97756 1.35128 7.11477C1.13269 7.25197 1 7.49192 1 7.75V13.25C1 14.7692 2.23079 16 3.75 16H14.25C15.7692 16 17 14.7692 17 13.25V7.754C17 7.69272 16.9925 7.63166 16.9776 7.5722L16.9766 7.5682C16.9219 7.34925 16.7715 7.16657 16.5672 7.07083C16.3628 6.97509 16.1262 6.97647 15.9229 7.07459L9.10649 10.3653C9.03967 10.3977 8.96065 10.3982 8.89154 10.3648L2.07606 7.07459Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default EnvelopeContent;
