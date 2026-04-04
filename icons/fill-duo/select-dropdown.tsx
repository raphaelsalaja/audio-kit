import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SelectDropdown({
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
          d="M14.2501 4H3.75012C2.23134 4 1.00012 5.23122 1.00012 6.75V11.25C1.00012 12.7688 2.23134 14 3.75012 14H14.2501C15.7689 14 17.0001 12.7688 17.0001 11.25V6.75C17.0001 5.23122 15.7689 4 14.2501 4Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12.0001 11C11.8077 11 11.6163 10.9268 11.4698 10.7803L9.71975 9.0303C9.42675 8.7373 9.42675 8.26277 9.71975 7.96987C10.0128 7.67697 10.4874 7.67687 10.7803 7.96987L12 9.18948L13.2197 7.96987C13.5127 7.67687 13.9873 7.67687 14.2802 7.96987C14.5731 8.26287 14.5732 8.7374 14.2802 9.0303L12.5302 10.7803C12.3837 10.9268 12.1925 11 12.0001 11Z"
          fill={fill}
        />
        <path
          d="M7.25011 9.75H4.50011C4.08601 9.75 3.75012 9.4141 3.75012 9C3.75012 8.5859 4.08601 8.25 4.50011 8.25H7.25011C7.66421 8.25 8.00011 8.5859 8.00011 9C8.00011 9.4141 7.66421 9.75 7.25011 9.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SelectDropdown;
