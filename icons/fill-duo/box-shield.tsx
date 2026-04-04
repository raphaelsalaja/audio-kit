import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BoxShield({
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
          d="M4.75 4.5C3.23069 4.5 2 5.73128 2 7.25V13.25C2 14.7687 3.23069 16 4.75 16H9.65862C9.55822 15.6768 9.5 15.324 9.5 14.9404V12C9.5 11.1203 10.0136 10.3169 10.8196 9.95149L10.8211 9.95083L13.568 8.70217C14.1597 8.43309 14.8395 8.43279 15.4312 8.70186L16 8.9604V7.25C16 5.73128 14.7693 4.5 13.25 4.5H4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M15.6445 5.89654C15.1723 5.06272 14.2771 4.5 13.25 4.5H4.75C3.71996 4.5 2.82259 5.06594 2.35143 5.9037L3.77709 3.0288C4.24151 2.09309 5.1956 1.5 6.241 1.5H11.759C12.8044 1.5 13.7584 2.09285 14.2228 3.02856L15.6445 5.89654Z"
          fill={fill}
        />
        <path
          d="M9.00002 3.5C9.41423 3.5 9.75002 3.83579 9.75002 4.25V7.25C9.75002 7.66421 9.41423 8 9.00002 8C8.5858 8 8.25002 7.66421 8.25002 7.25V4.25C8.25002 3.83579 8.5858 3.5 9.00002 3.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M17.5605 11.3174L14.8105 10.0674C14.6132 9.97761 14.3867 9.97761 14.1894 10.0674L11.4395 11.3174C11.1719 11.4385 11 11.7061 11 12V14.9404C11 16.9902 13.9604 17.8779 14.2979 17.9726C14.3638 17.9912 14.4322 17.9999 14.5 17.9999C14.5678 17.9999 14.6362 17.9911 14.7021 17.9726C15.0395 17.8779 18 16.9902 18 14.9404V12C18 11.7061 17.8281 11.4385 17.5605 11.3174ZM16.5 14.9404C16.5 15.5488 15.3726 16.1758 14.5 16.4658V11.5742L16.5 12.4834V14.9404Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BoxShield;
