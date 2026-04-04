import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SideProfile2({
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
          d="M8.1,9.3l-1.354-1.806c-.111-2.974-2.16-5.535-5.047-6.278l-.25-.068c-.227-.06-.468-.015-.653,.127s-.295,.362-.295,.596v14.379c0,.414,.336,.75,.75,.75h1c.414,0,.75-.336,.75-.75v-1.75h.89c1.435,0,2.64-1.121,2.742-2.551l.078-1.075,1.068-.427c.217-.086,.381-.269,.443-.494,.063-.225,.019-.466-.122-.653Zm-4.1-1.3c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Z"
          fill={fill}
        />
        <path
          d="M9.778,9.953c.062,.225,.227,.407,.443,.494l1.068,.427,.078,1.075c.103,1.431,1.308,2.551,2.742,2.551h.89v1.75c0,.414,.336,.75,.75,.75h1c.414,0,.75-.336,.75-.75V1.871c0-.234-.109-.454-.295-.596s-.427-.188-.653-.127l-.25,.068c-2.887,.743-4.936,3.305-5.047,6.278l-1.354,1.806c-.141,.187-.186,.428-.122,.653Zm3.222-2.953c0-.552,.448-1,1-1s1,.448,1,1c0,.552-.448,1-1,1s-1-.448-1-1Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default SideProfile2;
