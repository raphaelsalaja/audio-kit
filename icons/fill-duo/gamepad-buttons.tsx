import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GamepadButtons({
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
          d="M6.37767 3.02914C6.37767 2.18401 7.06428 1.5 7.90769 1.5H10.0922C10.9365 1.5 11.6213 2.18487 11.6213 3.02914V4.19653C11.6213 4.60048 11.4615 4.99068 11.1729 5.27817L9.77179 6.67927C9.34547 7.10559 8.65353 7.10559 8.22722 6.67927L6.82564 5.27771C6.53843 4.9905 6.37767 4.60185 6.37767 4.19653V3.02914Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.7208 6.82475C13.0081 6.53742 13.3969 6.3766 13.8024 6.3766H14.9702C15.8157 6.3766 16.5 7.06347 16.5 7.90724V10.0926C16.5 10.9372 15.8149 11.6224 14.9702 11.6224H13.8024C13.3982 11.6224 13.0078 11.4625 12.7202 11.1737L11.3186 9.77209C10.8921 9.3456 10.8921 8.65338 11.3186 8.22689L12.7208 6.82475Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8.2284 11.322C8.65462 10.8958 9.34638 10.8958 9.77259 11.322L11.1738 12.7232C11.4609 13.0104 11.6217 13.3989 11.6217 13.8041V14.9712C11.6217 15.8153 10.937 16.5 10.0929 16.5H7.90809C7.06403 16.5 6.37933 15.8153 6.37933 14.9712V13.8041C6.37933 13.4003 6.53913 13.0102 6.82771 12.7227L8.2284 11.322Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1.5 7.9084C1.5 7.06457 2.18451 6.38007 3.02833 6.38007H4.1951C4.59886 6.38007 4.98887 6.53982 5.27622 6.82831L6.67652 8.22862C7.10262 8.65472 7.10262 9.34628 6.67652 9.77238L5.2757 11.1732C4.98864 11.4603 4.6002 11.6209 4.1951 11.6209H3.02833C2.18365 11.6209 1.5 10.9347 1.5 10.0917V7.9084Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default GamepadButtons;
