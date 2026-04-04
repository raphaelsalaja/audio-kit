import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Investment({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none">
        <path
          d="M12 22.5612C15.3137 22.5612 18 21.4099 18 19.9898V17.4183L16.9189 19.0102L13.8131 19.9898H10.8023L7.04547 19.0374L6 17.4183V19.9898C6 21.4099 8.68629 22.5612 12 22.5612Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M18 17.4184C18 18.8385 15.3137 19.9898 12 19.9898C8.68629 19.9898 6 18.8385 6 17.4184C6 15.9982 8.68629 14.8469 12 14.8469C12.4449 14.8469 12.8786 14.8677 13.2959 14.9071C15.5766 15.1223 17.3706 15.8936 17.8645 16.8723C17.9532 17.0483 18 17.231 18 17.4184Z"
          stroke={fill}
        />
        <path
          d="M6 17.4183V19.9898C6 21.4099 8.68629 22.5612 12 22.5612C15.3137 22.5612 18 21.4099 18 19.9898V17.4183"
          stroke={fill}
        />
        <path
          d="M12 17.1809V6.95525C12 6.62603 12.162 6.31791 12.4333 6.13134L12.9439 5.78012"
          stroke={fill}
          strokeLinecap="round"
        />
        <path d="M10 17.1809H14" stroke={fill} strokeLinecap="round" />
        <path
          d="M17.676 2.24207C15.4389 2.64268 12.6687 2.73451 12.026 4.58081C11.9022 4.93638 12.1027 5.31282 12.4327 5.49409C16.4136 7.68083 16.5546 4.04422 17.7844 2.42969C17.8443 2.35098 17.7734 2.22463 17.676 2.24207Z"
          stroke={fill}
        />
        <path
          d="M22.4614 13.6509C21.9387 7.38565 18.9957 7.01982 16.1747 8.66534C10.4042 12.0314 20.5262 13.0941 22.3055 13.7682C22.3814 13.7969 22.4681 13.7317 22.4614 13.6509Z"
          stroke={fill}
        />
        <path
          d="M1.98466 11.5529C2.5073 5.28763 5.45035 4.92179 8.27133 6.56731C14.0419 9.93338 3.91983 10.996 2.1405 11.6701C2.06469 11.6989 1.97793 11.6336 1.98466 11.5529Z"
          stroke={fill}
        />
        <path
          d="M12.0014 9.54758L13.5489 8.7657C14.1134 8.48048 14.7796 8.47909 15.3453 8.76194L18.4462 10.3124"
          stroke={fill}
          strokeLinecap="round"
        />
        <path
          d="M12.0001 7.28928L10.4525 6.5074C9.88802 6.22218 9.22188 6.22079 8.65619 6.50363L5.5553 8.05408"
          stroke={fill}
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export default Investment;
