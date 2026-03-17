# Flexible Instructional Adaptation

## Description
Enables the system to dynamically modify lesson pacing and content delivery based on immediate student engagement metrics and feedback loops.

## When to Use
Use this workflow when you need to diagnose conceptual gaps in real-time rather than relying on the original lesson plan. It is specifically designed for scenarios where students can identify literary devices (e.g., "emotive language") but fail to explain their effect or purpose, or when students become frustrated and require temporary scaffolding.

## Process
1. **Diagnose in Real-Time**: Prioritize diagnosing using student responses in real time over relying on the original lesson plan.
2. **Narrow the Scaffold**: If a student identifies a feature but cannot explain its effect, provide a sentence frame instead of asking for a full analytical response.
3. **Model and Pivot**: Model one example aloud and ask the student to try the same structure with a different sentence immediately after providing the frame.
4. **Adjust Sequence**: Embed success criteria and sentence stems around the language of analysis, ensuring modelling and guided practice last longer before independent work.
5. **Plan Proactively**: Add an earlier diagnostic task to test whether students could explain effect, not just identify techniques, and plan for misunderstandings upfront rather than waiting for them to appear mid-lesson.

## Decision Criteria
- **Misdiagnosis Risk**: Relying solely on the original lesson plan without checking student responses can lead to misdiagnosis.
- **Cognitive Load**: A common low-level error is that a student labels a device (e.g., "emotive language") and stops there, unable to explain the effect or why the writer chose it.
- **Frustration Management**: When a student becomes frustrated, keep the tone calm and frame the scaffold as temporary support, not a limitation (e.g., "You are not wrong—you've spotted...").
- **Success Definition**: Do not treat the student's identification of a feature as a complete success if they cannot explain the effect.
- **Vague Answers**: If student answers are vague and repetitive, the issue is weak conceptual understanding, not lack of effort.

## Edge Cases & Failure Modes
- **Overestimation of Knowledge**: Students may overestimate prior knowledge, requiring the teacher to move slower than planned.
- **Frustration Loops**: If a student becomes frustrated, failing to frame the scaffold as temporary support can turn it into a limitation.
- **Incomplete Analysis**: Students may label a device but stop there, failing to explain the effect or the writer's choice.
- **Misdiagnosis**: Relying solely on the original lesson plan without checking student responses can lead to misdiagnosis.

## Examples
**Input**: A teammate asks for flexible instructional adaptation support in General users with partial evidence and a same-day deadline.
**Output**: The skill clarifies the decision, names missing evidence, applies the documented process, and stops at the human boundary if confidence is still low.

**Input**: An operator wants to automate flexible instructional adaptation end to end for General users.
**Output**: The skill executes the reusable steps, records the rationale, and hands off final judgment or irreversible action to the named reviewer.

## Boundaries
- **Final Approval**: Final approval remains with the human expert or designated reviewer.
- **Advisory Nature**: Outputs remain advisory until the human high school teacher workflow owner approves the final recommendation.
- **No Automation**: Do not invent tools, APIs, credentials, or unsupported automation.
- **Manual Boundaries**: Keep manual boundaries explicit and conservative.