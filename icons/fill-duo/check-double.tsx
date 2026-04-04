import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CheckDouble({
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
          d="M9.2501 15C9.0206 15 8.8038 14.895 8.6617 14.7148L7.9176 13.7729C7.6608 13.4482 7.7159 12.9765 8.0411 12.7197C8.3658 12.4624 8.838 12.518 9.0943 12.8432L9.2466 13.0356L16.6587 3.53849C16.9136 3.21139 17.3843 3.1537 17.7114 3.4086C18.0381 3.6635 18.0962 4.1347 17.8413 4.4613L9.8413 14.7113C9.6997 14.8929 9.4824 14.9994 9.2524 14.9999L9.2501 15Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M4.50012 15C4.27062 15 4.05382 14.895 3.91122 14.7148L0.161215 9.96479C-0.0950848 9.63959 -0.0399847 9.1679 0.285215 8.9111C0.611415 8.6548 1.08212 8.70989 1.33892 9.03509L4.49662 13.0351L11.9087 3.53849C12.1631 3.21139 12.6343 3.1537 12.9614 3.4086C13.2881 3.6635 13.3462 4.1347 13.0913 4.4613L5.09132 14.7113C4.94972 14.8929 4.73242 14.9994 4.50192 14.9999L4.50012 15Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CheckDouble;
