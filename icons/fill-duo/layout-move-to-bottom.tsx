import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LayoutMoveToBottom({
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
          d="M14.2501 2H3.75009C2.23131 2 1.00009 3.23122 1.00009 4.75V13.25C1.00009 14.7688 2.23131 16 3.75009 16H14.2501C15.7689 16 17.0001 14.7688 17.0001 13.25V4.75C17.0001 3.23122 15.7689 2 14.2501 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.2501 11.5H4.75009C4.33599 11.5 4.00009 11.8359 4.00009 12.25C4.00009 12.6641 4.33599 13 4.75009 13H13.2501C13.6642 13 14.0001 12.6641 14.0001 12.25C14.0001 11.8359 13.6642 11.5 13.2501 11.5Z"
          fill={fill}
        />
        <path
          d="M8.4698 10.0303C8.6163 10.1768 8.80819 10.25 9.00009 10.25C9.19199 10.25 9.3839 10.1768 9.5304 10.0303L11.6515 7.90918C11.9445 7.61618 11.9445 7.14159 11.6515 6.84869C11.3585 6.55579 10.8839 6.55569 10.591 6.84869L9.75019 7.68951V5.5C9.75019 5.0859 9.41429 4.75 9.00019 4.75C8.58609 4.75 8.25019 5.0859 8.25019 5.5V7.68951L7.40939 6.84869C7.11639 6.55569 6.64179 6.55569 6.34889 6.84869C6.05599 7.14169 6.05589 7.61628 6.34889 7.90918L8.4698 10.0303Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default LayoutMoveToBottom;
